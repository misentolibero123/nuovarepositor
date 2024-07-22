import { NextResponse } from "next/server";
import axios from "axios";

const COINBASE_COMMERCE_API_URL = "https://api.commerce.coinbase.com/charges";

export async function POST(req) {
  const { amount, currency } = await req.json();

  try  {
    const chargeData = {
      name: "Acquisto Criptovaluta",
      description: "Acquisto di criptovaluta tramite Coinbase Commerce",
      pricing_type: "fixed_price",
      local_price: {
        amount: amount,
        currency: currency,
      },
      metadata: {
        customer_id: "id_unico_clientee",
        customer_name: "nome_cliente",
      },
      redirect_url: "https://tuo-sito.com/acquisto-completato",
      cancel_url: "https://tuo-sito.com/acquisto-annullato",
    };

    const response = await axios.post(
      COINBASE_COMMERCE_API_URL,
      chargeData,
      {
        headers: {
          "Content-Type": "application/json",
          "X-CC-Api-Key": API_KEY,
          "X-CC-Version": "2018-03-22",
        },
      }
    );

    return NextResponse.json({ success: true, data: response.data });
  } catch (error) {
    console.error("Error creating charge:", error.response.data);
    return NextResponse.json({ success: false, message: error.response.data.message }, { status: 500 });
  }
}

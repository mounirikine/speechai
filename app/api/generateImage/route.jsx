import { NextResponse } from "next/server";
import Replicate from "replicate";
export async function POST(req) {
  try {
    const {prompt} = await req.json()
    const replicate = new Replicate({
        auth:process.env.REPLICATE_API_TOKEN
    });

    const input = {
        // prompt:prompt,
        // height:1280,
        // width:1024,
        // num_outputs:1,
        // model:"dev"
        model: "dev",
        prompt: "pink sky",
        lora_scale: 1,
        num_outputs: 1,
        aspect_ratio: "16:9",
        output_format: "webp",
        guidance_scale: 3.5,
        output_quality: 90,
        prompt_strength: 0.8,
        extra_lora_scale: 1,
        num_inference_steps: 28
    };

    const output = await replicate.run(
      "levelsio/san-andreas:61cdb2f6a8f234ea9ca3cce88d5454f9b951f93619f5f353a331407f4a05a314",
      { input }
    );
    return NextResponse.json({ "result": output[0] });
    console.log(output);
    //=> ["https://replicate.delivery/yhqm/VyD24fDyzM2nQSg0nQc58W2...
  } catch (e) {
    return NextResponse.json({ "error":"no fiund" });
  }
}



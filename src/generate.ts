import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export async function generateImage(prompt: string): Promise<string> {
    const response = await openai.createImage({prompt, n: 1, size: "256x256"});
    return response.data.data[0].url as string
}
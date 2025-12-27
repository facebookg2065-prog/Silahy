
import { GoogleGenAI } from "@google/genai";

export const checkLegalCompliance = async (itemName: string, description: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp',
      contents: `بصفتك خبير قانوني في أنظمة الأسلحة والمعدات التكتيكية، هل القطعة التالية قانونية للعرض في متجر مدني مرخص؟
      الاسم: ${itemName}
      الوصف: ${description}
      أجب باختصار (قانوني/غير قانوني) مع ذكر السبب والاشتراطات الأساسية بنقاط مختصرة جداً باللغة العربية.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "تعذر الاتصال بخدمة التحقق الذكي حالياً.";
  }
};

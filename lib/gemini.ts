
import { GoogleGenAI } from "@google/genai";

export const checkLegalCompliance = async (itemName: string, description: string) => {
  if (!itemName) return "يرجى إدخال اسم القطعة أولاً.";

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `بصفتك خبير قانوني وتقني في أنظمة الأسلحة والمعدات التكتيكية في الشرق الأوسط، قم بتحليل القطعة التالية:
      الاسم: ${itemName}
      الوصف: ${description}
      
      المطلوب:
      1. هل هي قانونية للتداول المدني (بناءً على الأنظمة العامة)؟
      2. ما هي فئتها الدقيقة؟
      3. نصيحة أمنية سريعة.
      
      اجعل الإجابة موجزة جداً، احترافية، ومرتبة في نقاط باللغة العربية.`,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Audit Error:", error);
    return "نعتذر، حدث خطأ أثناء التحليل التكتيكي الذكي. يرجى المحاولة لاحقاً.";
  }
};

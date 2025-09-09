import {LanguageUniEnum} from "../constant/language-uni-enum";
import {LangMessageEnum} from "../../locale/lang-message-enum";
export class I18nUtil {
    public static useI18nData:any=null;
    //region修改语音
    public static changeAppLanguage(lang: LanguageUniEnum): void {
        const {locale} = I18nUtil.useI18nData;
        locale.value = lang;
        uni.setLocale(lang);
    }
    // endregion

    // endregion 当前语言
    public static getAppLanguage(): LanguageUniEnum {
        const {locale} =I18nUtil.useI18nData;
        return locale.value;
    }
    // endregion

    // endregion 获取翻译后的言
    public static getI18nMessage(msg: LangMessageEnum): string {
        let rtn: string = '';
        const {t} = I18nUtil.useI18nData;
        rtn = t(msg);
        return rtn;
    }
    // endregion

}

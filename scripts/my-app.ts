import {AppPlatformEnum} from "./constant/app-platform-enum";

export class MyApp {
    public static getAppPlatform(): AppPlatformEnum {
        let rtn: AppPlatformEnum =AppPlatformEnum.WECHAT_APP;
        //@ts-ignore
        let uniPlatform: string = process.env.UNI_PLATFORM;
        switch (uniPlatform) {
            case 'h5':
                rtn = AppPlatformEnum.H5;
                break;
            case 'mp-weixin':
                rtn = AppPlatformEnum.WECHAT_APP;
                break;
            case 'app-plus':
                rtn = AppPlatformEnum.APP;
                break;
            default:
                break;
        }
        return rtn;
    }
}
import { Logger } from "tslog";
const logger: Logger = new Logger({
    exposeStack: false,
});
logger.setSettings({ displayFunctionName: false, displayInstanceName: false, dateTimePattern: 'year-month-day hour:minute' })
export const log = logger
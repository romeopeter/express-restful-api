import logger from "pino";
import dayjs from "dayjs";


const date = dayjs();
const log = logger({
    prettyPrint: true,
    base: {
        pid: false,
    },
    timestamp: () => `,"time":"${date.format('YYYY-MM-DDTHH:mm:ss')}"`
});

export default log;
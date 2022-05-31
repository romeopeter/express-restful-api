import logger from "pino";
import dayjs from "dayjs";


const date = dayjs();
const log = logger({
    prettyPring: true,
    base: {
        pid: false,
    },
    timestamp: () => `,"time":"${date.format('YYYY-MM-DDTHH:mm:ss')}"`
});

export default log;
// import Bugsnag from '@bugsnag/js';
// import BugsnagPluginReact from '@bugsnag/plugin-react';
// import LogModel, { LogType } from 'models/log.model';
// import { createLog } from './auditLogService';

// const init = (): void => {
//     Bugsnag.start({
//         apiKey: `${process.env.NEXT_PUBLIC_BUGSNAG_API_KEY}`,
//         plugins: [new BugsnagPluginReact()],
//     });
// };

// const log = (data: any): void => {
//     const env = process.env.NODE_ENV;
//     if (env == 'development') {
//         console.log(data);
//     } else {
//         //Log on bugsnag
//         Bugsnag.notify(data);

//         //log on internal log system
//         //const newLog = new LogModel();
//         // newLog.type = LogType.ERROR;
//         // newLog.description = `Client ${
//         //     data instanceof Error ? data.message : 'Error'
//         // } occured at ${new Date()}`;
//         // newLog.data = data;
//         // createLog(newLog)
//         //     .then(() => console.log('Error Logged'))
//         //     .catch((err) => console.log(err));
//     }
// };
// export default {
//     init,
//     log,
// };

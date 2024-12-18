import app from './app'
import { log } from '../utils/logger';
const port = process.env.PORT || 3000;
app.listen(port, async () => {
    console.clear()
    log.debug("Listening on port " + port);
})
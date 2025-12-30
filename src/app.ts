import { envs } from './config'
import { AppRouter } from './presentation/route'
import { Server } from './presentation/server'
;(() => {
  main()
})()

async function main() {
  const server = new Server({ port: envs.PORT, routes: AppRouter.routes })

  server.start()
}

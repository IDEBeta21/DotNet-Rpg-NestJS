import { registerAs } from "@nestjs/config";
import { DataSource, DataSourceOptions } from "typeorm";

const config = {
    type: 'postgres',
    // host: 'localhost', //for running in local
    host: 'nestjs-rpgdb', //for running in docker
    port: 5435,
    username: 'postgres',
    password: 'psqladminpass',
    database: 'nestjs_rpgdb',
    entities: ["dist/**/*.entity{.ts,.js}"],
    migrations: ["dist/migrations/*{.ts,.js}"],
    autoLoadEntities: true,
    synchronize: false,
}

export default registerAs('typeorm', () => config)
export const connectionSource = new DataSource(config as DataSourceOptions);
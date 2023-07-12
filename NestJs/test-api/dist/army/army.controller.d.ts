import { CreateSoldierDto } from './dto/create-army.dto';
export declare class ArmyController {
    getArmy(type: string): {
        type: string;
    };
    getOneSoldier(): string;
    createSoldier(createSoldierDto: CreateSoldierDto): {
        name: string;
    };
}

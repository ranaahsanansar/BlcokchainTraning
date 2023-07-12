import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateSoldierDto } from './dto/create-army.dto';

@Controller('army')
export class ArmyController {

    // /army?type=airforce 
    @Get()
    getArmy(@Query('type') type: string) {
        return {
            type,
        };
    }
    // /army/92938929
    @Get(':id')
    getOneSoldier() {
        return "With ID";
    }

    @Post()
    createSoldier(@Body() createSoldierDto: CreateSoldierDto){
        return { name : createSoldierDto.name}
    }
}
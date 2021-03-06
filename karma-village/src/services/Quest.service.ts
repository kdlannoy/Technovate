import {IQuest} from '@/models/IQuest';

class QuestService {
    private quests: IQuest[] = [
        {
            id: 1,
            title: 'I am looking for a seat',
            description: 'I am going to move to Ghent and I am looking for a seat in the region of Ghent.',
            image: '@/assets/seat.jpeg',
        } as IQuest,
        {
            id: 2,
            title: 'I am looking for a car',
            description: 'I want to buy a car.',
            image: '@/assets/car.jpeg',
        } as IQuest,
        {
            id: 3,
            title: 'I am looking for a bike',
            description: 'I am moving to Leuven and i want to buy a bike.',
            image: '@/assets/bike.jpeg',
        } as IQuest,
    ];

    public getAllQuests(): IQuest[] {
        return this.quests;
    }

    public getQuestById(id: number): IQuest {
        return this.quests.filter((x) => x.id === id)[0];
    }
}

export const questService = new QuestService();

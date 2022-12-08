import {IMainContentProp} from '../../src/components/MainContent';
import {MainContentAlignTypes} from "../../src/enums";

const mockParagraph = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus' + "\n" + 'mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'


const mockData: IMainContentProp[] = [
    {
        headline: 'Introduce Your Product Quickly & Effectively',
        paragraph: mockParagraph,
        align: MainContentAlignTypes.Left,
        additionalContent: true
    }, {
        headline: 'Light, Fast & Powerful',
        paragraph: mockParagraph,
        align: MainContentAlignTypes.Left,
        additionalContent: true
    }, {
        headline: 'Light, Fast & Powerful',
        paragraph: mockParagraph,
        align: MainContentAlignTypes.Right,
        additionalContent: false
    }, {
        headline: 'A Price To Suit Everyone',
        paragraph: mockParagraph,
        align: MainContentAlignTypes.Center,
        additionalContent: true
    }];

export default mockData;
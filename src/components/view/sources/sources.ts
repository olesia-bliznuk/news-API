import './sources.css';
import { ISource } from '../../app/interfaces';

class Sources {
    public draw(data: ISource[]): void {

        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone: DocumentFragment = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
            const sourceNameElement = sourceClone.querySelector('.source__item-name') as HTMLElement;
            sourceNameElement.textContent = item.name;
            const sourceElement = sourceClone.querySelector('.source__item') as HTMLElement;
            sourceElement.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLElement).append(fragment);
    }

}

export default Sources;

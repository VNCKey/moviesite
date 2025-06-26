import type MultiSelectorModel from "../model/MultiSelector.model";
import style from '../style/MultiSelector.module.css'

interface MultiSelectorProps{
    selected:MultiSelectorModel[];
    noSelected: MultiSelectorModel[];
    onChange(selected: MultiSelectorModel[], noSelected: MultiSelectorModel[]):void;
}



const MultiSelector = (props: MultiSelectorProps) => {

    const selected = (item:MultiSelectorModel)=>{
        const selected = [...props.selected, item];
        const noSelected = props.noSelected.filter(value => value !== item)
        props.onChange(selected,noSelected)
    }


    const deselected = (item: MultiSelectorModel)=>{
        const selected = props.selected.filter(value => value !== item)
        const noSelected = [...props.noSelected, item]
        props.onChange(selected,noSelected)
    }


    const selectAll = ()=>{
        const selected = [...props.selected, ...props.noSelected]
        const noSelected:MultiSelectorModel[] = []
        props.onChange(selected, noSelected)
    } 

    const deSelectAll = ()=>{
        const selected:MultiSelectorModel[] = []
        const noSelected =  [...props.selected, ...props.noSelected]
        props.onChange(selected, noSelected)
    } 

    return (
        <div className={style.div}>
            <ul>
                {props.noSelected.map(item => <li key={item.key} onClick={()=> selected(item)}>{item.description}</li>)}
            </ul>
            <div className={style.buttons}> 
                <button type="button" onClick={selectAll}>{'>>'}</button>
                <button type="button" onClick={deSelectAll}>{'<<'}</button>
            </div>
            <ul>
                {props.selected.map(item => <li key={item.key} onClick={()=>deselected(item)}>{item.description}</li>)}
            </ul>
        </div>
    );
};





export default MultiSelector;
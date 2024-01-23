import { useState } from "react";
import Button from "./Button";
import "./styles/Grid.css";

function Grid({ gridConfig }) {
    return (
        <>
            <GridCaption captionConfig={gridConfig.captionConfig} />
            <GridData dataConfig={gridConfig.dataConfig} />
        </>
    );
}

export default Grid;

function GridCaption({ captionConfig }) {

    const gridCaption = captionConfig.captionsName;

    let gridCaptionElement = new Array();

    for (let i = 0; i < gridCaption.length; i++){
        gridCaptionElement.push(<div key={i} className="grid-caption-item">{gridCaption[i]}</div>);
    };

    return (
        <div className="grid-caption">
            {gridCaptionElement}
        </div>
    );
}

function GridData({ dataConfig }) {

    const [selectedItem, selectItem] = useState(null);

    const itemsConfig = dataConfig.itemsConfig;
    let grid = new Array();

    for (let i = 0; i < dataConfig.itemsConfig.length; i++)
    {
        let itemConfig = itemsConfig[i].itemConfig;

        if (i % 2)
            itemConfig.className = "data-item"
        else
            itemConfig.className = "data-item gray-data-item"

        if (selectedItem && selectedItem == itemConfig)
            itemConfig.className += " selected-item"

        itemConfig.selectedItem = selectedItem;
        itemConfig.selectItem = selectItem;

        grid.push(<GridItem key={i} itemConfig={itemConfig} />);
    }
    return (
        <div className="data-grid">
            {grid}
        </div>
    );
}

function GridItem({ itemConfig }) {

    const count = Object.values(itemConfig.values);
    const isSelect = itemConfig.selectedItem == itemConfig;

    const select = () => {
        if (!isSelect) {
            itemConfig.selectItem(itemConfig);
        }
    }

    let gridItem = new Array();
    for (let i = 0; i < count.length; i++) {
        gridItem.push(<div key={i} className="grid-cell">{count[i]}</div>);
    }

    return (
        <div onClick={select} className={itemConfig.className}>
            <div className="grid-record">
                {gridItem}
            </div>
            <ItemToolBar isSelect={isSelect} itemConfig={itemConfig} />
        </div>
    );
}

function ItemToolBar({ isSelect, itemConfig }) {
    if (!isSelect) return;

    const onOpenClick = () => {
        console.log("Click on grid item " + itemConfig.id +" open button!");
    };
    const onCopyClick = () => {
        console.log("Click on grid item " + itemConfig.id + " copy button!");
    };
    const onDeleteClick = () => {
        console.log("Click on grid item " + itemConfig.id + " delete button!");
    };

    const openButtonConfig = {
        name: "Открыть",
        classes: "button add-button blue-button",
        onClick: onOpenClick
    };
    const copyButtonConfig = {
        name: "Копировать",
        classes: "button",
        onClick: onCopyClick
    };
    const deleteButtonConfig = {
        name: "Удалить",
        classes: "button",
        onClick: onDeleteClick
    };

    return (
        <div className="item-grid-toolbar">
            <Button buttonConfig={openButtonConfig} />
            <Button buttonConfig={copyButtonConfig} />
            <Button buttonConfig={deleteButtonConfig} />
        </div>
    );
}
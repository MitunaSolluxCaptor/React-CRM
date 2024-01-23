import Grid from "../common/Grid";
import "./styles/SectionBody.css"

function SectionBody() {
    let gridConfig = {
        captionConfig: {
            captionsName: [
                "Название",
                "Телефон",
                "Код"
            ]
        },
        dataConfig: {
            itemsConfig: [
                {
                    itemConfig: {
                        id: "123",
                        values: {
                            name: "Название0",
                            phone: "+7",
                            code: "0"
                        }
                    }
                },
                {
                    itemConfig: {
                        id:"321",
                        values: {
                            name: "Название1",
                            phone: "+7",
                            code: "1"
                        }
                    }
                }
            ]
        }
    };

    return (
        <>
            <Grid gridConfig={gridConfig} />
        </>
    );
}

export default SectionBody;
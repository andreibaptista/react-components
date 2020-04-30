import React from "react";
import {filhosComProps} from '../utils/utils'

export default props =>
    <div>
        {filhosComProps(props)}
        {/*Tem um map. Para cada elemento está sendo feito um clone*/}
        {/*e para esse clone, está sendo adiciona as propriedades que */}
        {/*eu recebi do componente pai*/}
    </div>
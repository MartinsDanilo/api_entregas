import Entity from "./Entity"
import {IMunicipio, ILocalizacao, ISaveMunicipio,} from "./MunicipioType"
class MunicipioModel extends Entity implements IMunicipio {
    constructor(
        public nome: string,
        public UF: string,
        public localizacao: ILocalizacao,
        public valorEntregaBase: number,
        public valorKmAdicional: number,
        public entregaBaseMts: number,
        public raioMaxDistance: number,
        public requiredNearPlaceToConfirmStartRide: boolean,
        public requiredNearClientToConfirm: boolean,
        public requiredNearplaceToConfirmReturnRide: boolean,
        public needCheckToConfirmReturnRide: boolean,
        public qtdMaxEntregaGroup: number,
        public maxDistanceDropsToGroup: number,
        ){
        super()
    }

    static Create({
        nome,
        UF,
        localizacao,
        valorEntregaBase,
        valorKmAdicional,
        entregaBaseMts,
        raioMaxDistance,
        requiredNearPlaceToConfirmStartRide,
        requiredNearClientToConfirm,
        requiredNearplaceToConfirmReturnRide,
        needCheckToConfirmReturnRide,
        qtdMaxEntregaGroup,
        maxDistanceDropsToGroup,
    }: ISaveMunicipio): IMunicipio {
        const municipio = new MunicipioModel(
            nome,
            UF,
            localizacao,
            valorEntregaBase,
            valorKmAdicional,
            entregaBaseMts,
            raioMaxDistance,
            requiredNearPlaceToConfirmStartRide,
            requiredNearClientToConfirm,
            requiredNearplaceToConfirmReturnRide,
            needCheckToConfirmReturnRide,
            qtdMaxEntregaGroup,
            maxDistanceDropsToGroup
        )

        return municipio;
    }
} 

export default MunicipioModel;
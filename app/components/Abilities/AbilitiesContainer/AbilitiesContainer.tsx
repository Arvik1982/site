import home_data from "../../../mock/home_data.json";
import AbilitiesBox from "../AbilitiesBox/AbilitiesBox";

export default function AbilitiesContainer(){
    const ABILITIES = home_data.abilities;
    return(<>
        {ABILITIES &&
            ABILITIES.map((ability, index) => {
              return (
                <AbilitiesBox
                  key={index}
                  index={index}
                  ability={ability.ability}
                />
              );
            })}</>
    )
}
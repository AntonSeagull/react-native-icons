

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSynagogueThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M204,60.4V32a4,4,0,0,0-8,0V60.4A20,20,0,0,0,180,80v49.11l-48-27.43V72a4,4,0,0,0-8,0v29.68L76,129.11V80A20,20,0,0,0,60,60.4V32a4,4,0,0,0-8,0V60.4A20,20,0,0,0,36,80V216a4,4,0,0,0,4,4h72a4,4,0,0,0,4-4V176a12,12,0,0,1,24,0v40a4,4,0,0,0,4,4h72a4,4,0,0,0,4-4V80A20,20,0,0,0,204,60.4ZM200,68a12,12,0,0,1,12,12v28H188V80A12,12,0,0,1,200,68ZM56,68A12,12,0,0,1,68,80v28H44V80A12,12,0,0,1,56,68ZM44,116H68v96H44Zm84,40a20,20,0,0,0-20,20v36H76V138.32l52-29.71,52,29.71V212H148V176A20,20,0,0,0,128,156Zm60,56V116h24v96Z" />
        </G>
      </Svg>
    );
  }


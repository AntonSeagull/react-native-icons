

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiVideoLight = (props: IconProps) => {

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
          <Path  d="M163.33,107l-48-32A6,6,0,0,0,106,80v64a6,6,0,0,0,9.33,5l48-32a6,6,0,0,0,0-10ZM118,132.79V91.21L149.18,112ZM216,42H40A14,14,0,0,0,26,56V168a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm2,126a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Zm12,40a6,6,0,0,1-6,6H32a6,6,0,0,1,0-12H224A6,6,0,0,1,230,208Z" />
        </G>
      </Svg>
    );
  }


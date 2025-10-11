

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoPrintSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M400,96V56a8,8,0,0,0-8-8H120a8,8,0,0,0-8,8V96" />
          <Path  d="M408,112H104a56,56,0,0,0-56,56V376a8,8,0,0,0,8,8h56v72a8,8,0,0,0,8,8H392a8,8,0,0,0,8-8V384h56a8,8,0,0,0,8-8V168A56,56,0,0,0,408,112ZM360,420a4,4,0,0,1-4,4H156a4,4,0,0,1-4-4V268a4,4,0,0,1,4-4H356a4,4,0,0,1,4,4ZM394,207.92a24,24,0,1,1,22-22A24,24,0,0,1,394,207.92Z" />
        </G>
      </Svg>
    );
  }


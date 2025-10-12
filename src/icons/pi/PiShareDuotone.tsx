

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiShareDuotone = (props: IconProps) => {

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
          <Path  d="M224,104l-48,48V56Z" opacity="0.2" />
          <Path  d="M229.66,98.34l-48-48A8,8,0,0,0,168,56V96h-3A103.94,103.94,0,0,0,64.25,174a8,8,0,0,0,15.5,4A88,88,0,0,1,165,112h3v40a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,229.66,98.34ZM184,132.69V75.31L212.69,104ZM200,216a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0V208H192A8,8,0,0,1,200,216Z" />
        </G>
      </Svg>
    );
  }


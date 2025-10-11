

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiLampThin = (props: IconProps) => {

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
          <Path  d="M243.68,150.42l-48-112A4,4,0,0,0,192,36H64a4,4,0,0,0-3.68,2.42l-48,112A4,4,0,0,0,16,156H124v56H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8H132V156h64v36a4,4,0,0,0,8,0V156h36a4,4,0,0,0,3.68-5.58ZM22.07,148,66.64,44H189.36l44.57,104Z" />
        </G>
      </Svg>
    );
  }


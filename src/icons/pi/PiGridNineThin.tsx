

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiGridNineThin = (props: IconProps) => {

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
          <Path  d="M216,52H40A12,12,0,0,0,28,64V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V64A12,12,0,0,0,216,52ZM100,148V108h56v40Zm56,8v40H100V156ZM36,108H92v40H36Zm64-8V60h56v40Zm64,8h56v40H164Zm56-44v36H164V60h52A4,4,0,0,1,220,64ZM40,60H92v40H36V64A4,4,0,0,1,40,60ZM36,192V156H92v40H40A4,4,0,0,1,36,192Zm180,4H164V156h56v36A4,4,0,0,1,216,196Z" />
        </G>
      </Svg>
    );
  }


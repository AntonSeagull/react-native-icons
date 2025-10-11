

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFirstAidBold = (props: IconProps) => {

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
          <Path  d="M216,84H172V40a20,20,0,0,0-20-20H104A20,20,0,0,0,84,40V84H40a20,20,0,0,0-20,20v48a20,20,0,0,0,20,20H84v44a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V172h44a20,20,0,0,0,20-20V104A20,20,0,0,0,216,84Zm-4,64H160a12,12,0,0,0-12,12v52H108V160a12,12,0,0,0-12-12H44V108H96a12,12,0,0,0,12-12V44h40V96a12,12,0,0,0,12,12h52Z" />
        </G>
      </Svg>
    );
  }


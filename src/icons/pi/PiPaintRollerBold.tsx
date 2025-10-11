

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPaintRollerBold = (props: IconProps) => {

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
          <Path  d="M232,84H212V64a20,20,0,0,0-20-20H52A20,20,0,0,0,32,64V84H16a12,12,0,0,0,0,24H32v20a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V108h16V155L130.5,182.8A20.09,20.09,0,0,0,116,202v30a12,12,0,0,0,24,0V205.05l97.5-27.85A20.09,20.09,0,0,0,252,158V104A20,20,0,0,0,232,84Zm-44,40H56V68H188Z" />
        </G>
      </Svg>
    );
  }


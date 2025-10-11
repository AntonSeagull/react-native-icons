

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiTurnL1 = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M20.939,9.509v10.93a.508.508,0,0,1-.5.5.5.5,0,0,1-.5-.5V9.509a3.5,3.5,0,0,0-3.5-3.5h-9.9l-.01,1.44a.5.5,0,0,1-.81.4l-2.47-1.96a.5.5,0,0,1,0-.78l2.49-1.94a.5.5,0,0,1,.81.4l-.01,1.44h9.9A4.507,4.507,0,0,1,20.939,9.509Z" />
        </G>
      </Svg>
    );
  }


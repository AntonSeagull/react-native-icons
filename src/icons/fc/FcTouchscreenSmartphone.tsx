

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcTouchscreenSmartphone = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 24, 24)`}
      >
        <G fill={color} stroke={color}>
          <Circle  fill="#A6642A" cx="24" cy="41" r="1.5" />
          <Circle  fill="#E91E63" cx="24" cy="23" r="2" />
          <Circle  fill="none" stroke="#F48FB1" cx="24" cy="23" r="4" strokeWidth="2" strokeMiterlimit="10" />
          <Circle  fill="none" stroke="#F8BBD0" cx="24" cy="23" r="6.5" strokeMiterlimit="10" />
          <Path  fill="#E38939" d="M12,40V8c0-2.2,1.8-4,4-4h16c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H16C13.8,44,12,42.2,12,40z" />
          <Path  fill="#FFF3E0" d="M32,7H16c-0.6,0-1,0.4-1,1v29c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V8C33,7.4,32.6,7,32,7z" />
        </G>
      </Svg>
    );
  }


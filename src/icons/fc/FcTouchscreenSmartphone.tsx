

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcTouchscreenSmartphone = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M12,40V8c0-2.2,1.8-4,4-4h16c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H16C13.8,44,12,42.2,12,40z" fill="#E38939" />
          <Path d="M32,7H16c-0.6,0-1,0.4-1,1v29c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V8C33,7.4,32.6,7,32,7z" fill="#FFF3E0" />
        </G>
      </Svg>
    );
  }


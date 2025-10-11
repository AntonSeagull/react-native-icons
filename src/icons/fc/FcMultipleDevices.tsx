

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcMultipleDevices = (props: IconProps) => {

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
          <Path d="M4,28V8c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v20c0,2.2-1.8,4-4,4H8C5.8,32,4,30.2,4,28z" fill="#546E7A" />
          <Path d="M36,7H8C7.4,7,7,7.4,7,8v20c0,0.6,0.4,1,1,1h28c0.6,0,1-0.4,1-1V8C37,7.4,36.6,7,36,7z" fill="#BBDEFB" />
          <Path d="M38,33H6c-2.2,0-4-1.8-4-4v0h40v0C42,31.2,40.2,33,38,33z" fill="#37474F" />
          <Path d="M24,40V16c0-2.2,1.8-4,4-4h12c2.2,0,4,1.8,4,4v24c0,2.2-1.8,4-4,4H28C25.8,44,24,42.2,24,40z" fill="#E38939" />
          <Path d="M40,15H28c-0.6,0-1,0.4-1,1v22c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V16C41,15.4,40.6,15,40,15z" fill="#FFF3E0" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcMultipleSmartphones = (props: IconProps) => {

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
          <Path d="M4,31V8c0-2.2,1.8-4,4-4h12c2.2,0,4,1.8,4,4v23c0,2.2-1.8,4-4,4H8C5.8,35,4,33.2,4,31z" fill="#455A64" />
          <Path d="M20,7H8C7.4,7,7,7.4,7,8v21c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V8C21,7.4,20.6,7,20,7z" fill="#BBDEFB" />
          <Path d="M14,36V13c0-2.2,1.8-4,4-4h12c2.2,0,4,1.8,4,4v23c0,2.2-1.8,4-4,4H18C15.8,40,14,38.2,14,36z" fill="#546E7A" />
          <Path d="M30,12H18c-0.6,0-1,0.4-1,1v21c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V13C31,12.4,30.6,12,30,12z" fill="#BBDEFB" />
          <Path d="M24,40V18c0-2.2,1.8-4,4-4h12c2.2,0,4,1.8,4,4v22c0,2.2-1.8,4-4,4H28C25.8,44,24,42.2,24,40z" fill="#E38939" />
          <Path d="M40,17H28c-0.6,0-1,0.4-1,1v20c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V18C41,17.4,40.6,17,40,17z" fill="#FFF3E0" />
        </G>
      </Svg>
    );
  }


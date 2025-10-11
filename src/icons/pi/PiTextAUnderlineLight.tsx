

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTextAUnderlineLight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M61.45,173.43a6,6,0,0,0,8-2.88L86.63,134h82.74l17.2,36.55A6,6,0,0,0,192,174a5.92,5.92,0,0,0,2.55-.57,6,6,0,0,0,2.88-8l-64-136a6,6,0,0,0-10.86,0l-64,136A6,6,0,0,0,61.45,173.43ZM128,46.09,163.72,122H92.28ZM222,216a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,216Z" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoTv = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M447.86,384H64.14A48.2,48.2,0,0,1,16,335.86V128.14A48.2,48.2,0,0,1,64.14,80H447.86A48.2,48.2,0,0,1,496,128.14V335.86A48.2,48.2,0,0,1,447.86,384Z" />
        </G>
      </Svg>
    );
  }


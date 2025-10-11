

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcTrademark = (props: IconProps) => {

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
          <Path d="M20.6,18.5h-4.2v14.2h-3.5V18.5H8.7v-2.9h11.9V18.5z" />
          <Path d="M27.1,15.6L30.3,28l3.2-12.4h4.5v17.1h-3.5v-4.6l0.3-7.1l-3.4,11.8h-2.4L25.7,21l0.3,7.1v4.6h-3.5V15.6 H27.1z" />
        </G>
      </Svg>
    );
  }


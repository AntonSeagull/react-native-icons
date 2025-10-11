

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiLayout4Fill = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M11 13V21H4C3.44772 21 3 20.5523 3 20V13H11ZM13 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H13V3ZM3 4C3 3.44772 3.44772 3 4 3H11V11H3V4Z" />
        </G>
      </Svg>
    );
  }


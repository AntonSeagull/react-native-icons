

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandDeviantart = (props: IconProps) => {

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
          <Path d="M18 3v4l-3.857 6h3.857v4h-6.429l-2.571 4h-3v-4l3.857 -6h-3.857v-4h6.429l2.571 -4z" />
        </G>
      </Svg>
    );
  }


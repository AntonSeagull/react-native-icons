

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineVerticalShades = (props: IconProps) => {

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
          <Path d="M20,19V3H4v16H2v2h20v-2H20z M14,5v14h-4V5H14z M6,5h2v14H6V5z M16,19V5h2v14H16z" />
        </G>
      </Svg>
    );
  }


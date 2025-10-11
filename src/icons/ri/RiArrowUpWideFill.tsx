

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiArrowUpWideFill = (props: IconProps) => {

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
          <Path d="M12 8.36853L20.9679 13.1162L20.0321 14.8838L12 10.6315L3.9679 14.8838L3.03212 13.1162L12 8.36853Z" />
        </G>
      </Svg>
    );
  }


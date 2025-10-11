

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoLogoHackernews = (props: IconProps) => {

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
          <Path d="M32,32V480H480V32ZM281.67,282.83v84H235v-84l-77-140H213l46.32,97.54,44.33-97.54h52.73Z" />
        </G>
      </Svg>
    );
  }


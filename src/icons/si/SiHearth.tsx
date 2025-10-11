

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiHearth = (props: IconProps) => {

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
          <Path d="M8.1958 10.318v9.576L.4531 24v-9.3298zm7.6591-4.162 7.692 4.1616v9.5736L15.8532 24v-9.3302l-7.6577-4.3522ZM8.196 0v9.576L.453 13.8027v-9.648Z" />
        </G>
      </Svg>
    );
  }


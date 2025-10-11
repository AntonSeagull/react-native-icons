

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPentagonUp = (props: IconProps) => {

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
          <Path d="M12 16L17 18V8L12 6L7 8V18L12 16ZM9 15.0459L12 13.8459L15 15.0459V9.35407L12 8.15407L9 9.35407V15.0459Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }


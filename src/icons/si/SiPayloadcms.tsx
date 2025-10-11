

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiPayloadcms = (props: IconProps) => {

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
          <Path d="M11.068 0 22.08 6.625v12.573L13.787 24V11.427L2.769 4.808 11.068 0ZM1.92 18.302l8.31-4.812v9.812l-8.31-5Z" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgAdidas = (props: IconProps) => {

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
          <Path d="M1.3294 19L0.731323 17.9641L5.06145 15.4641L7.1029 19H1.3294Z" fill="currentColor" />
          <Path d="M15.1858 19H9.4123L5.7935 12.7321L10.1236 10.2321L15.1858 19Z" fill="currentColor" />
          <Path d="M23.2687 19H17.4952L10.8557 7.5L15.1858 5L23.2687 19Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }


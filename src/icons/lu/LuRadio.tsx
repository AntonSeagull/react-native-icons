

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuRadio = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M16.247 7.761a6 6 0 0 1 0 8.478" />
          <Path  d="M19.075 4.933a10 10 0 0 1 0 14.134" />
          <Path  d="M4.925 19.067a10 10 0 0 1 0-14.134" />
          <Path  d="M7.753 16.239a6 6 0 0 1 0-8.478" />
        </G>
      </Svg>
    );
  }


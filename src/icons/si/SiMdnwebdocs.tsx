

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiMdnwebdocs = (props: IconProps) => {

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
          <Path  d="m21.538 1.1-6.745 21.8h-2.77L18.77 1.1ZM24 1.1v21.8h-2.462V1.1Zm-12 0v21.8H9.538V1.1Zm-2.462 0L2.77 22.9H0L6.746 1.1Z" />
        </G>
      </Svg>
    );
  }


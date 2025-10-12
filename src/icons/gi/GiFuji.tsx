

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiFuji = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M154.256 47.115a96 96 0 0 0-96 96 96 96 0 0 0 96 96 96 96 0 0 0 14.176-1.136c6.022-12.03 11.431-23.802 15.906-35.06l2.248-5.653 47.04-.172a96 96 0 0 0 16.63-53.979 96 96 0 0 0-96-96zM198.012 215l-2.405 5.254C153.933 311.309 96.85 395.687 25.355 473.93L11.584 489h485.734l-9.953-14.172C426.91 388.75 357.94 302.642 328.467 220.945L326.32 215H198.012zm-7.83 56.92l8.687 48.08 19.666-43.785L240 320l24.78-48 7.22 64 24.385-64L336 320l-2.865-43.973C366.38 341.224 416.418 406.385 462.463 471H51.936c55.01-62.373 101.316-128.65 138.246-199.08z" />
        </G>
      </Svg>
    );
  }

